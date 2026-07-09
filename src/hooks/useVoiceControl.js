import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";

const useVoiceControl = (isActive, onCommand) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!isActive) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = i18n.language === "pt" ? "pt-BR" : "en-US";

    recognition.onresult = (event) => {
      const command =
        event.results[event.results.length - 1][0].transcript.toLowerCase();
      console.log("Voice Command Received:", command);

      if (command.includes("home") || command.includes("início")) {
        scroller.scrollTo("hero", { smooth: true, offset: -100 });
        onCommand("Navigating to Home");
      } else if (command.includes("about") || command.includes("sobre")) {
        scroller.scrollTo("about", { smooth: true, offset: -100 });
        onCommand("Opening About section");
      } else if (command.includes("projects") || command.includes("projetos")) {
        scroller.scrollTo("projects", { smooth: true, offset: -100 });
        onCommand("Loading Projects archive");
      } else if (command.includes("contact") || command.includes("contato")) {
        scroller.scrollTo("contact", { smooth: true, offset: -100 });
        onCommand("Initiating contact protocol");
      } else if (command.includes("resume") || command.includes("currículo")) {
        (async () => {
          const possiblePaths = [
            "/Curriculo_Jefferson_Teles_TI.pdf",
            "/cv-jefferson-teles.pdf",
            "/Curriculo_Jefferson_Teles.pdf"
          ];
          for (const path of possiblePaths) {
            try {
              const response = await fetch(path, { method: 'HEAD' });
              if (response.ok) {
                window.open(path, "_blank");
                onCommand("Downloading Technical Resume");
                return;
              }
            } catch (error) {
              continue;
            }
          }
          onCommand("Error: CV file not found");
        })();
      }
    };

    recognition.start();
    return () => recognition.stop();
  }, [isActive, i18n.language, onCommand]);
};

export default useVoiceControl;

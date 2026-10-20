import { Download } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

type ResumeLinkProps = {
  className?: string;
  label?: string;
  iconSize?: number;
};

export function ResumeLink({
  className = 'btn btn--ghost',
  label = 'Baixar currículo',
  iconSize = 15,
}: ResumeLinkProps) {
  return (
    <a
      href={siteConfig.resumePath}
      download={siteConfig.resumeDownloadName}
      className={cn(className)}
    >
      <Download size={iconSize} aria-hidden />
      {label}
      <span className="sr-only"> (PDF)</span>
    </a>
  );
}

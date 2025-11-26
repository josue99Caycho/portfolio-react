import type { FC } from "react";
import { DeveloperIllustration } from "../../Shared/Components/illustrations/DeveloperIllustration";
import { CenteredPage } from "../../Shared/Components/layout/CenteredPage";
import { Badge } from "../../Shared/Components/ui/Badge";
import { StatusPill } from "../../Shared/Components/ui/StatusPill";
import styles from "./UnderConstructionPage.module.css";

export const UnderConstructionPage: FC = () => {
  return (
    <div className={styles.background}>
      <CenteredPage>
        <Badge className={styles.badge}>Portafolio</Badge>

        <div className={styles.iconWrapper}>
          <DeveloperIllustration className={styles.devSvg} />
        </div>

        <h1 className={styles.title}>Sitio en construcción</h1>

        <p className={styles.subtitle}>
          Estoy trabajando en una nueva versión de mi portafolio.
          <br />
          Vuelve pronto para ver el resultado.
        </p>

        <StatusPill
          text="Desplegando ideas y código..."
          className={styles.statusPill}
          dotClassName={styles.statusDot}
        />

        <div className={styles.footerNote}>
          © {new Date().getFullYear()} Josuecillo.dev · Developer
        </div>
      </CenteredPage>
    </div>
  );
};

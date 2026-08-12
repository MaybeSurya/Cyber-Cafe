// src/components/hardware/PcStation.tsx
"use client";

import Monitor from "./Monitor";
import KeyboardEnhanced from "./KeyboardEnhanced";
import MouseEnhanced from "./MouseEnhanced";
import PcTower from "./PcTower";
import StickyNote from "@/components/notices/StickyNote";
import StatusPanel from "@/components/computer/StatusPanel";
import { useCafeStore } from "@/store/cafeStore";
import { useAudio } from "@/hooks/useAudio";
import { useScene } from "@/hooks/useScene";
import PCExperience from "@/components/experience/PCExperience";
import styles from "./PcStation.module.css";

interface PcStationProps {
  stationId?: string;
  connectedSpeed?: string;
}

export default function PcStation({
  stationId = "STATION_04",
  connectedSpeed = "CONNECTED / 100Mbps",
}: PcStationProps) {
  const { pcState } = useCafeStore((s) => s.pcState);
  const { playSfx } = useAudio();
  const { navigateTo } = useScene();
  const powerOnPC = useCafeStore((s) => s.powerOnPC);

  const handleClick = () => {
    if (pcState === 'OFF') {
      powerOnPC();
      playSfx("sfx-computer-power-on");
    } else if (pcState === 'SESSION_ACTIVE' || pcState === 'READY') {
      // If already powered on, navigate to computer experience
      navigateTo("pc-experience");
    }
  };

  return (
    <div className={styles.stationWrapper}>
      {/* Monitor Assembly */}
      <div className={styles.monitorContainer}>
        <Monitor
          brand="VisionMaster Pro"
          powered={pcState !== 'OFF' && pcState !== 'SHUTDOWN'}
          onClick={handleClick}
          ariaLabel={`Station ${stationId} computer screen. Click to use computer.`}
        >
          <StatusPanel stationId={stationId} connectedSpeed={connectedSpeed} />
        </Monitor>
        {/* Sticky note taped to top corner of monitor */}
        <div className={styles.stickyNotePos}>
          <StickyNote text="No Pendrives!! Virus warning" rotation={6} />
        </div>
      </div>

      {/* Desk Surface (Keyboard & Mouse) */}
      <div className={styles.deskSurface}>
        <KeyboardEnhanced />
        <MouseEnhanced />
        {pcState !== 'OFF' && pcState !== 'SHUTDOWN' && (
          <PcTower />
        )}
      </div>
    </div>
  );
}
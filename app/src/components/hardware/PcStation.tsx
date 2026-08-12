"use client";
// src/components/hardware/PcStation.tsx
// Physical workstation composing Monitor, Keyboard, Mouse, and StickyNote.

import Monitor from "./Monitor";
import Keyboard from "./Keyboard";
import Mouse from "./Mouse";
import PcTower from "./PcTower";
import StickyNote from "@/components/notices/StickyNote";
import StatusPanel from "@/components/computer/StatusPanel";
import { useCafeStore } from "@/store/cafeStore";
import { useAudio } from "@/hooks/useAudio";
import { useScene } from "@/hooks/useScene";
import styles from "./PcStation.module.css";

interface PcStationProps {
  stationId?: string;
  connectedSpeed?: string;
}

export default function PcStation({
  stationId = "STATION_04",
  connectedSpeed = "CONNECTED / 100Mbps",
}: PcStationProps) {
  const computerPoweredOn = useCafeStore((s) => s.computerPoweredOn);
  const powerOnComputer = useCafeStore((s) => s.powerOnComputer);
  const { playSfx } = useAudio();
  const { navigateTo } = useScene();

  const handleOpenComputer = () => {
    if (!computerPoweredOn) {
      powerOnComputer();
      playSfx("sfx-computer-power-on");
    }
    navigateTo("computer");
  };

  return (
    <div className={styles.stationWrapper}>
      {/* Monitor Assembly */}
      <div className={styles.monitorContainer}>
        <Monitor
          brand="VisionMaster Pro"
          powered={computerPoweredOn}
          onClick={handleOpenComputer}
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
        <Keyboard />
        <Mouse />
        {computerPoweredOn && stationId === "STATION_04" && <PcTower />}
      </div>
    </div>
  );
}
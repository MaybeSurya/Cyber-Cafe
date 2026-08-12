// src/components/experience/PCExperience.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCafeStore } from "@/store/cafeStore";
import { useAudio } from "@/hooks/useAudio";
import { useRouter } from "next/navigation";
import styles from "./PCExperience.module.css";

export default function PCExperience() {
  const { 
    pcState, 
    sessionTimer, 
    errorMessage,
    powerOnPC,
    completeBoot,
    showLogin,
    startSession,
    endSession,
    loadSession,
    showError,
    clearError,
    shutdownPC
  } = useCafeStore((s) => ({
    pcState: s.pcState,
    sessionTimer: s.sessionTimer,
    errorMessage: s.errorMessage,
    powerOnPC: s.powerOnPC,
    completeBoot: s.completeBoot,
    showLogin: s.showLogin,
    startSession: s.startSession,
    endSession: s.endSession,
    loadSession: s.loadSession,
    showError: s.showError,
    clearError: s.clearError,
    shutdownPC: s.shutdownPC
  }));
  
  const { playSfx } = useAudio();
  const router = useRouter();
  const [bootProgress, setBootProgress] = useState<number>(0);
  const [loginProgress, setLoginProgress] = useState<number>(0);

  // Handle automatic transitions based on state
  useEffect(() => {
    switch (pcState) {
      case 'BOOTING':
        // Simulate boot process
        const bootInterval = setInterval(() => {
          setBootProgress((prev) => {
            const newPrev = Math.max(0, prev); // Ensure prev is number
            const newProgress = newPrev + 10;
            if (newProgress >= 100) {
              clearInterval(bootInterval);
              completeBoot(); // Transition to LOGIN state
              return 100;
            }
            return newProgress;
          });
        }, 100); // Update every 100ms
        
        return () => clearInterval(bootInterval);
        
      case 'LOGIN':
        // Simulate login process
        const loginInterval = setInterval(() => {
          setLoginProgress((prev) => {
            const newPrev = Math.max(0, prev); // Ensure prev is number
            const newProgress = newPrev + 15;
            if (newProgress >= 100) {
              clearInterval(loginInterval);
              startSession(); // Transition to SESSION_ACTIVE state
              return 100;
            }
            return newProgress;
          });
        }, 150); // Update every 150ms
        
        return () => clearInterval(loginInterval);
        
      case 'SESSION_ACTIVE':
        // Start session timer
        setSessionTimer(0);
        const timerInterval = setInterval(() => {
          setSessionTimer((prev) => prev + 1);
        }, 1000); // Update every second
        
        return () => clearInterval(timerInterval);
        
      case 'LOADING':
        // Auto-transition from loading after specified duration
        const loadingInterval = setInterval(() => {
          setSessionTimer((prev) => {
            const newPrev = Math.max(0, prev); // Ensure prev is number
            const newVal = newPrev - 1;
            if (newVal <= 0) {
              clearInterval(loadingInterval);
              startSession(); // Return to active session after loading
              return 0;
            }
            return newVal;
          });
        }, 1000);
        
        return () => clearInterval(loadingInterval);
        
      case 'ERROR':
        // Stay in error state until cleared
        break;
        
      case 'SHUTDOWN':
        // Power off after shutdown
        setTimeout(() => {
          // This would typically power off the computer
          // For now, just return to OFF state
          endSession(); // This would set pcState to 'OFF'
        }, 1000);
        break;
        
      default:
        break;
    }
  }, [pcState, sessionTimer, errorMessage, completeBoot, showLogin, startSession, endSession, loadSession, showError, clearError, shutdownPC, playSfx]);

  // Handle shutdown when power button is held or similar
  const handlePowerClick = () => {
    if (pcState === 'SESSION_ACTIVE' || pcState === 'READY') {
      // Initiate shutdown
      shutdownPC();
    } else if (pcState === 'OFF') {
      // Power on
      powerOnPC();
      playSfx("sfx-computer-power-on");
    }
  };

  // Handle keyboard input for power button simulation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handlePowerClick();
    }
  };

  // Render based on PC state
  switch (pcState) {
    case 'OFF':
      return renderOffState();
      
    case 'BOOTING':
      return renderBootingState();
      
    case 'LOGIN':
      return renderLoginState();
      
    case 'READY':
      return renderReadyState();
      
    case 'SESSION_ACTIVE':
      return renderSessionActiveState();
      
    case 'LOADING':
      return renderLoadingState();
      
    case 'ERROR':
      return renderErrorState();
      
    case 'SHUTDOWN':
      return renderShutdownState();
      
    default:
      return renderOffState();
  }
}

// State rendering functions
function renderOffState() {
  return (
    <div className="pc-experience-container" role="status" aria-live="polite">
      <div className="pc-screen off">
        <div className="pc-screen-content">
          <div className="pc-power-indicator off" />
          <div className="pc-screen-text">POWER OFF</div>
        </div>
      </div>
      <div className="pc-instructions">
        Press Power Button to Start
      </div>
    </div>
  );
}

function renderBootingState() {
  return (
    <div className="pc-experience-container" role="status" aria-live="polite">
      <div className="pc-screen booting">
        <div className="pc-screen-content">
          <div className="pc-power-indicator on" />
          <div className="pc-boot-progress">
            <div className="pc-boot-bar">
              <div className="pc-boot-fill" style={{ width: `${bootProgress}%` }} />
            </div>
            <span className="pc-boot-text">{bootProgress}%</span>
          </div>
          <div className="pc-boot-logs">
            {/* Boot logs would go here */}
            <div className="pc-boot-log">Initializing Hardware...</div>
            <div className="pc-boot-log">Loading System Files...</div>
            <div className="pc-boot-log">SAIDEEP CYBER v2.1</div>
          </div>
        </div>
      </div>
      <div className="pc-instructions">
        Booting System...
      </div>
    </div>
  );
}

function renderLoginState() {
  return (
    <div className="pc-experience-container" role="status" aria-live="polite">
      <div className="pc-screen login">
        <div className="pc-screen-content">
          <div className="pc-power-indicator on} />
          <div className="pc-login-box">
            <div className="pc-login-header">
              <div className="pc-login-title">SAIDEEP CYBER SYSTEM</div>
              <div className="pc-login-subtitle">Version 2.1.0</div>
            </div>
            <div className="pc-login-fields">
              <div className="pc-login-field">
                <label className="pc-login-label">Username:</label>
                <input 
                  type="text" 
                  className="pc-login-input"
                  placeholder="operator"
                  defaultValue="operator"
                />
              </div>
              <div className="pc-login-field">
                <label className="pc-login-label">Password:</label>
                <input 
                  type="password" 
                  className="pc-login-input"
                  placeholder="••••••••"
                />
              </div>
            </div>
            <div className="pc-login-progress">
              <div className="pc-login-bar">
                <div className="pc-login-fill" style={{ width: `${loginProgress}%` }} />
              </div>
              <span className="pc-login-text">{loginProgress}%</span>
            </div>
            <button 
              className="pc-login-button"
              onClick={showLogin}
              disabled={loginProgress < 100}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="pc-instructions">
        Enter Credentials to Access System
      </div>
    </div>
  );
}

function renderReadyState() {
  return (
    <div className="pc-experience-container" role="status" aria-live="polite">
      <div className="pc-screen ready">
        <div className="pc-screen-content">
          <div className="pc-power-indicator on} />
          <div className="pc-desktop-preview">
            <div className="pc-wallpaper} />
            <div className="pc-icon-grid">
              {/* Desktop icons preview */}
              <div className="pc-icon">���������������������🌐</div>
              <div className="pc-icon">���������������������📁</div>
              <div className="pc-icon">���������������������🎵</div>
              <div className="pc-icon">���������������������🖨��������������️</div>
            </div>
            <div className="pc-taskbar-preview">
              <div className="pc-start-button>Start</div>
              <div className="pc-time>00:00</div>
            </div>
            <div className="pc-session-info>
              <div className="pc-info-row">
                <span className="pc-info-label">Station:</span>
                <span className="pc-info-value">PC-07</span>
              </div>
              <div className="pc-info-row>
                <span className="pc-info-label">Status:</span>
                <span className="pc-info-value">Ready</span>
              </div>
              <div className="pc-info-row>
                <span className="pc-info-label">Connection:</span>
                <span className="pc-info-value">CONNECTED</span>
              </div>
            </div>
          </div>
      </div>
      <div className="pc-instructions>
        Click to Start Session
      </div>
    </div>
  );
}

function renderSessionActiveState() {
  const hours = Math.floor(sessionTimer / 3600);
  const minutes = Math.floor((sessionTimer % 3600) / 60);
  const seconds = sessionTimer % 60;
  
  return (
    <div className="pc-experience-container" role="status" aria-live="polite">
      <div className="pc-screen active">
        <div className="pc-screen-content">
          <div className="pc-power-indicator on} />
          <div className="pc-desktop>
            <div className="pc-wallpaper} />
            <div className="pc-icon-grid">
              {/* Desktop icons */}
              <div className="pc-icon" onClick={() => {/* Open browser */}}>���������������������🌐</div>
              <div className="pc-icon" onClick={() => {/* Open file explorer */}}>���������������������📁</div>
              <div className="pc-icon" onClick={() => {/* Open music player */}}>���������������������🎵</div>
              <div className="pc-icon" onClick={() => {/* Open print dialog */}}>���������������������🖨��������������️</div>
            </div>
            <div className="pc-window-preview">
              {/* Simulate active window */}
              <div className="pc-window-frame>
                <div className="pc-window-title-bar>
                  <span className="pc-window-title>Internet Explorer</span>
                  <div className="pc-window-controls>
                    <button className="pc-window-control>−</button>
                    <button className="pc-window-control>�������□</button>
                    <button className="pc-window-control>×</button>
                  </div>
                </div>
                <div className="pc-window-content>
                  <div className="pc-address-bar>
                    <span className="pc-protocol>http://</span>
                    <input 
                      type="text" 
                      className="pc-address-input"
                      placeholder="www.google.co.in"
                    />
                  </div>
                  <div className="pc-page-content>
                    <div className="pc-page-title>Google Search</div>
                    <div className="pc-search-box>
                      <input 
                        type="text" 
                        className="pc-search-input"
                        placeholder="Search..."
                      />
                      <button className="pc-search-button>Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pc-taskbar>
              <div className="pc-start-button>Start</div>
              <div className="pc-tray-icons>
                <div className="pc-tray-icon>���������������������🔊</div>
                <div className="pc-tray-icon>���������������������📶</div>
                <div className="pc-tray-icon>���������������������🔋</div>
              </div>
              <div className="pc-time>
                {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
          <div className="pc-session-info>
            <div className="pc-info-row>
              <span className="pc-info-label>Station:</span>
              <span className="pc-info-value>PC-07</span>
            </div>
            <div className="pc-info-row>
              <span className="pc-info-label>Status:</span>
              <span className="pc-info-value>Session Active</span>
            </div>
            <div className="pc-info-row>
              <span className="pc-info-label>Time Online:</span>
              <span className="pc-info-value>
                {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </div>
            <div className="pc-info-row>
              <span className="pc-info-label>Rate:</span>
              <span className="pc-info-value>�������₹20 / HOUR</span>
            </div>
            <div className="pc-info-row>
              <span className="pc-info-label>Connection:</span>
              <span className="pc-info-value>CONNECTED</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pc-instructions>
        Session Active - Click to Power Off
      </div>
    </div>
  );
}

function renderLoadingState() {
  return (
    <div className="pc-experience-container" role="status" aria-live="polite">
      <div className="pc-screen loading">
        <div className="pc-screen-content>
          <div className="pc-power-indicator on} />
          <div className="pc-loading-spinner} />
          <div className="pc-loading-text>Loading...</div>
        </div>
      </div>
      <div className="pc-instructions>
        Please Wait
      </div>
    </div>
  );
}

function renderErrorState() {
  return (
    <div className="pc-experience-container" role="status" aria-live="polite">
      <div className="pc-screen error>
        <div className="pc-screen-content>
          <div className="pc-power-indicator error} />
          <div className="pc-error-icon>��������������⚠</div>
          <div className="pc-error-title>System Error</div>
          <div className="pc-error-message>{errorMessage}</div>
          <button 
            className="pc-error-button"
            onClick={clearError}
          >
            OK
          </button>
        </div>
      </div>
      <div className="pc-instructions>
        An Error Occurred
      </div>
    </div>
  );
}

function renderShutdownState() {
  return (
    <div className="pc-experience-container" role="status" aria-live="polite">
      <div className="pc-screen shutdown>
        <div className="pc-screen-content>
          <div className="pc-power-indicator off} />
          <div className="pc-shutdown-text>Shutting Down...</div>
        </div>
      </div>
      <div className="pc-instructions>
        System Shutting Down
      </div>
    </div>
  );
}
/* 
 * Copyright (c) 2023-25 Zendalona
 * This software is licensed under the GPL-3.0 License.
 * See the LICENSE file in the root directory for more information.
 */

class AudioManager {
  constructor() {
    this._sounds = new Map();
  }

  _createAudio(path) {
    if (!this._sounds.has(path)) {
      try {
        const audio = new Audio(path);
        this._sounds.set(path, audio);
      } catch (error) {
        console.warn(`Failed to load audio file: ${path}`, error);
        return null;
      }
    }
    return this._sounds.get(path);
  }

  play(path) {
    const audio = this._createAudio(path);
    if (audio) {
      audio.play().catch(error => {
        console.warn(`Failed to play audio: ${path}`, error);
      });
    }
  }
}

const audioManager = new AudioManager();

const AUDIO_PATHS = {
  CLICK: '../src/assets/audio/click.mp3',
  CLOSE: '../src/assets/audio/close.mp3',
  SUCCESS: '../src/assets/audio/sucessfull.mp3',
  BORDER_CROSS: '../src/assets/audio/border-crossing.mp3'
};

// For backward compatibility
export const clickSound = {
  play: () => audioManager.play(AUDIO_PATHS.CLICK)
};

export const closeSound = {
  play: () => audioManager.play(AUDIO_PATHS.CLOSE)
};

export const successSound = {
  play: () => audioManager.play(AUDIO_PATHS.SUCCESS)
};

export const bordercrossSound = {
  play: () => audioManager.play(AUDIO_PATHS.BORDER_CROSS)
};


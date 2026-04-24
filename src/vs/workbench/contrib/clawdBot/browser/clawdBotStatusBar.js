"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateClawdBotStatusBar = void 0;
// Minimal Clawd Bot status bar
function activateClawdBotStatusBar(registry) {
    if (registry && typeof registry.registerContribution === 'function') {
        registry.registerContribution('clawdBotStatusBar', { id: 'clawdBotStatusBar', version: '0.1.0', name: 'Clawd Bot Status Bar' });
    }
}
exports.activateClawdBotStatusBar = activateClawdBotStatusBar;

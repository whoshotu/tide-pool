"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateClawContextCollector = void 0;
// Minimal Claw Code context collector
function activateClawContextCollector(registry) {
    if (registry && typeof registry.registerContribution === 'function') {
        registry.registerContribution('clawContextCollector', { id: 'clawContextCollector', version: '0.1.0', name: 'Claw Context Collector' });
    }
    // Lightweight context collector placeholder for P0 scaffold
}
exports.activateClawContextCollector = activateClawContextCollector;

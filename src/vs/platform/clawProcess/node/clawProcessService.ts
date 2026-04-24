// Stub: Node-side process service scaffold
import { IClawProcessService } from "../common/clawProcess";

export class ClawProcessService implements IClawProcessService {
  private sessions = new Map<string, { args: string[] }>();

  constructor() {}

  async spawn(sessionId: string, args: string[]): Promise<number> {
    this.sessions.set(sessionId, { args });
    // No actual spawn in scaffold; return success exit code 0
    return 0;
  }

  cancel(sessionId: string): void {
    this.sessions.delete(sessionId);
  }

  async getVersion(): Promise<string> {
    return "0.0.0";
  }

  onStream(sessionId: string, handler: (chunk: string) => void): void {
    // no-op in scaffold
  }

  onDone(sessionId: string, handler: () => void): void {
    // no-op in scaffold
  }

  onError(sessionId: string, handler: (err: Error) => void): void {
    // no-op in scaffold
  }
}

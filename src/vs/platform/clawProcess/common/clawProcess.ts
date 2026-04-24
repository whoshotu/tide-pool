// Core interface: IClawProcessService (P0 scaffold, real implementation to come)
export interface IClawProcessService {
  // Spawn a subprocess for a given session. Returns a promise resolving to exit code.
  spawn(sessionId: string, args: string[]): Promise<number>;
  // Cancel a running subprocess for a given session
  cancel(sessionId: string): void;
  // Retrieve the Claude/Claw binary version
  getVersion(): Promise<string>;
  // Event hookups for streaming output and lifecycle
  onStream(sessionId: string, handler: (chunk: string) => void): void;
  onDone(sessionId: string, handler: () => void): void;
  onError(sessionId: string, handler: (err: Error) => void): void;
}

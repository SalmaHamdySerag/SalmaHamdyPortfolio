const TERMINAL_LINES: { text: string; cls?: string }[] = [
  { text: 'class ', cls: 'k' }, { text: 'Developer' }, { text: ' {\n' },
  { text: '  ' }, { text: 'role' }, { text: ' = ' }, { text: "'Backend Developer'", cls: 's' }, { text: ';\n' },
  { text: '  ' }, { text: 'stack' }, { text: ' = ' }, { text: "['Laravel', 'Redis', 'Python' , 'Node.js']", cls: 's' }, { text: ';\n' },
  { text: '\n' },
  { text: '  ' }, { text: 'function ', cls: 'k' }, { text: 'ship', cls: 'f' }, { text: '() {\n' },
  { text: '    ' }, { text: 'return ', cls: 'k' }, { text: "'fast, clean, real-time code';", cls: 's' }, { text: '\n' },
  { text: '  }\n' },
  { text: '}' },
];

export function TerminalWindow() {
  return (
    <div className="terminal hero-anim d3">
      <div className="term-bar">
        <div className="term-dot" style={{ background: '#ff5f57' }} />
        <div className="term-dot" style={{ background: '#febc2e' }} />
        <div className="term-dot" style={{ background: '#28c840' }} />
        <span className="fname">Developer.php</span>
      </div>
      <div className="term-body">
        <span className="line" style={{ animationDelay: '0.1s' }}>
          {TERMINAL_LINES.map((seg, i) => (
            <span key={i} className={seg.cls}>
              {seg.text}
            </span>
          ))}
          <span className="cursor" />
        </span>
      </div>
    </div>
  );
}

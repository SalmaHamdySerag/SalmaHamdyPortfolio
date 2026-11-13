export function Tag({ children }: { children: string }) {
  return <span className="tag">{children}</span>;
}

export function Chip({ children }: { children: string }) {
  return <span className="chip">{children}</span>;
}

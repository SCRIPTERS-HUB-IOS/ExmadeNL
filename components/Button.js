export default function Button({ children, neon, glass, discord }) {
  return (
    <>
      <button className={`btn ${neon ? 'neon' : ''} ${glass ? 'glass' : ''} ${discord ? 'discord-btn' : ''}`}>
        {children}
      </button>
      <style jsx>{`
        .btn {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          padding: 0.6rem 1.6rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          user-select: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 0 5px rgba(255,0,0,0.3);
          color: var(--neon-red);
          background: transparent;
          text-shadow: 0 0 8px var(--neon-red);
        }
        .btn:hover {
          box-shadow:
            0 0 10px var(--neon-red),
            0 0 20px var(--neon-red),
            0 0 30px var(--neon-red);
          color: #fff;
          text-shadow: 0 0 15px var(--neon-red);
          background: rgba(255, 0, 0, 0.15);
          transform: scale(1.05);
        }
        .glass {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
          text-shadow: none;
        }
        .glass:hover {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 20px #fff;
          color: #fff;
          transform: scale(1.05);
        }
        .discord-btn {
          color: #5865F2;
          background: rgba(88, 101, 242, 0.15);
          border: 1px solid rgba(88, 101, 242, 0.3);
          box-shadow: 0 0 10px rgba(88, 101, 242, 0.7);
        }
        .discord-btn:hover {
          background: rgba(88, 101, 242, 0.25);
          box-shadow: 0 0 25px #5865F2;
          color: #fff;
        }
      `}</style>
    </>
  );
}

import Link from 'next/link';
import NeonParticles from '../components/NeonParticles';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <NeonParticles />
      <Navbar />
      <main className="main-container">
        <div className="branding-neon">exmade</div>
        <h1 className="title">exmadeW</h1>
        <div className="button-group">
          <Link href="/methods" passHref>
            <Button neon>Methods</Button>
          </Link>
          <a href="https://discord.gg/skDSzwCScu" target="_blank" rel="noopener noreferrer" >
            <Button glass discord>
              <img src="/discord-blue.svg" alt="Discord" className="discord-logo" />
              Our Discord
            </Button>
          </a>
        </div>
      </main>
      <style jsx>{`
        .main-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 30px;
          padding: 1rem;
          text-align: center;
          z-index: 1;
        }
        .branding-neon {
          position: fixed;
          top: 10px;
          left: 10px;
          font-weight: 900;
          font-size: 1.1rem;
          color: var(--neon-red);
          filter: drop-shadow(0 0 5px var(--neon-red));
          user-select: none;
          z-index: 10;
          letter-spacing: 0.1em;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .title {
          font-size: 4rem;
          font-weight: 800;
          color: var(--neon-red);
          text-shadow:
            0 0 10px var(--neon-red),
            0 0 20px var(--neon-red),
            0 0 30px var(--neon-red);
          font-family: 'Segoe UI Black', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          user-select: none;
        }
        .button-group {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          max-width: 500px;
        }
        .discord-logo {
          width: 20px;
          height: 20px;
          margin-right: 8px;
          filter: drop-shadow(0 0 3px #5865f2);
          vertical-align: middle;
        }
      `}</style>
    </>
  );
}

import Link from 'next/link';
import NeonParticles from '../components/NeonParticles';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const methods = [
  { name: 'Splunk', url: 'https://app.splunk.gg/u/exmadeGG' },
  { name: 'Injuries', url: 'https://www.logged.tg/auth/exmade' },
  { name: 'Cookie Bypasser', url: 'https://app.splunk.gg/u/exmadeGG' },
  { name: 'Hyperlink Gen', url: 'https://dsprs.vercel.app/hyperlink' },
];

export default function Methods() {
  return (
    <>
      <NeonParticles />
      <Navbar />
      <main className="main-container">
        <div className="branding-neon">exmade</div>
        <h1 className="title">Methods</h1>
        <div className="button-group methods">
          {methods.map((method) => (
            <a
              key={method.name}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button neon>{method.name}</Button>
            </a>
          ))}
        </div>
        <Link href="/" passHref>
          <Button glass>Back to Home</Button>
        </Link>
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
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--neon-red);
          text-shadow:
            0 0 10px var(--neon-red),
            0 0 20px var(--neon-red),
            0 0 30px var(--neon-red);
          font-family: 'Segoe UI Black', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          user-select: none;
        }
        .button-group.methods {
          max-width: 400px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }
      `}</style>
    </>
  );
}

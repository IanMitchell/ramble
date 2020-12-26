import GitHub from '../components/GitHub';

export default function Home() {
  return (
    <div className="h-full grid justify-center align-center">
      <header class="m-auto text-center">
        <h1 className="text-5xl font-extrabold ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400">
            Coming Soon
          </span>{' '}
          🤫
        </h1>
        <h2 className="mt-8 text-center">
          <a href="https://github.com/ianmitchell/ramble">
            <GitHub className="w-16 h-16 text-white m-auto" />
          </a>
        </h2>
      </header>
    </div>
  );
}

import Grid from './Grid';
import GitHubIcon from '../icons/GitHub';

export default function Footer() {
  return (
    <footer className="text-gray-500">
      <Grid className="pt-2 mt-8">
        <p className="col-start-2 col-span-3">
          &copy; {new Date().getFullYear()} Ramble
        </p>
        <aside className="col-span-3 ml-auto">
          <a href="https://github.com/ianmitchell/ramble">
            <GitHubIcon className="w-6 h-6" />
          </a>
        </aside>
      </Grid>
    </footer>
  );
}

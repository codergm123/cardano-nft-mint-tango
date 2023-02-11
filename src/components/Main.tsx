import Home from './elements/Home';
import Mint from './elements/Mint';
import NFTFlow from './elements/NFTFlow';
import Mission from './elements/Mission';
import Party from './elements/Party';
import Roadmap from './elements/Roadmap';
import Super from './elements/Super';

const Main = () => {
  return (
    <main className="flex-1 container py-0 mx-auto font-body">
      <div>
        <div className="flex flex-col items-center justify-center">
          <Home />
          <Mint />
          <NFTFlow />
          <Mission />
          <Party />
          <Roadmap />
          <Super />
        </div>
      </div>
    </main>
  );
}

export default Main;
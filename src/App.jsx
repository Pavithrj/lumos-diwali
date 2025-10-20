import BackgroundAnimation from './components/BackgroundAnimation';
import FireworksCanvas from './components/FireworksCanvas';

export default function App() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <BackgroundAnimation />

            <FireworksCanvas />
        </div>
    )
};
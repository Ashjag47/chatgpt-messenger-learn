import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">Chat GPT</h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-10 w-10 text-white" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">"Tell me a joke"</p>
            <p className="infoText">"What's the weather like?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-10 w-10 text-white" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className='infoText'>Change the ChatGPT Model to use</p>
            <p className='infoText'>Messages are stored in Firebase's Firestore</p>
            <p className='infoText'>Hot Toast notifications when ChatGPT is thinking</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-10 w-10 text-white" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"May occasionally generate incorrect information"</p>
            <p className="infoText">"May occasionally generate harmful or biased content"</p>
            <p className="infoText">"Limited knowledge of world and events after 2023"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

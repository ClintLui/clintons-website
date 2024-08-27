import Image from "next/image";
import Layout from '@/components/Layout';
import person from '../../public/test-image.jpg';
import ContainerBlock from '../components/ContainerBlock/ContainerBlock';

export default function Home() {
  return (
    <main className="container-main">
      <ContainerBlock backgroundImage={person.src}>
          <h1 className="text-4xl font-bold">
            WELCOME TO MY JOURNEY 
        </h1>
      </ContainerBlock>
      <ContainerBlock backgroundImage={person.src}>
          <h1 className="text-4xl font-bold">
            WELCOME TO MY JOURNEY OF BUILDING THE FUTURE
        </h1>
      </ContainerBlock>
    </main>
  );
}

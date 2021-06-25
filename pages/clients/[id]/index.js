import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <h2>{router.query.id}</h2>
    </div>
  );
}

export default ClientProjectsPage;

import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    // load data...
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: router.query.id, clientprojectid: 'projecta' },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <h2>{router.query.id}</h2>

      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;

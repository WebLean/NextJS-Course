import React from 'react';
import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  const { id, clientprojectid } = router.query;
  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>

      <h2>{id}</h2>
      <h2>{clientprojectid}</h2>
    </div>
  );
}

export default SelectedClientProjectPage;

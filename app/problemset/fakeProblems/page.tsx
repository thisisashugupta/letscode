import React from 'react'
import { faker } from '@faker-js/faker';

interface ProblemsType {
    title: string;
    desc: string;
}

function FakeProblems() {

    let problemsArr : ProblemsType[];

    for (let i=0; i<50; i++) {
        const randomTitle = faker;
    }

  return (
    <div>FakeProblems</div>
  )
}

export default FakeProblems
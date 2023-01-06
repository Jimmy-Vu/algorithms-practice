function countStudents(students: number[], sandwiches: number[]): number {
  // loops through students as long as there is at least one student that prefers the top sandwich
  while (students.includes(sandwiches[0])) {
    // check if the first student in the queue wants the top sandwich of the stack
    // if not, the student leaves the queue and gets pushed to the back of the queue
    if (students[0] !== sandwiches[0]) {
      const temp = students.shift()!;
      students.push(temp);
      // if the student wants the sandwich, the top sandwich gets popped off of the stack and the student leaves the queue permanently
    } else {
      sandwiches.shift();
      students.shift();
    }
  }
  return students.length;
};

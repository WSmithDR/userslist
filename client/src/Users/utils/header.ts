interface Label {
  id:number,
  name:"Avatar" | "Email" | "First name" |"Last name",
  align?: 'center';
  format?: (value: number) => string;
}

const headLabels: readonly Label[] = [
  {id:0, name:"Avatar"},
  {id:1, name:"First name"},
  {id:2, name:"Last name"},
  {id:3, name:"Email"},
];

export default headLabels
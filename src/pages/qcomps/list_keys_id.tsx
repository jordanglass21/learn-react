/**
 * Array of people with their details.
 * @typedef {Object} Person
 * @property {number} id - Unique identifier for the person.
 * @property {string} name - Name of the person.
 * @property {string} profession - Profession of the person.
 * @property {string} accomplishment - Notable accomplishment of the person.
 * @property {string} imageId - Image ID for the person's photo.
 */
export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'szV5sdG'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'YfeOqp2'
}];

function getImageUrl(imageId: string) {
  return 'https://i.imgur.com/' + imageId + '.jpg'
}

/**
 * Displays a list of people with their image and name.
 * @returns {JSX.Element} A list of people with their image and name.
 */
export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person.imageId)}
        alt={person.name}
        width={100}
        height={100}
        />
        <p>{person.name}</p>
    </li>
  );
  return <ul>{listItems}</ul>;
}
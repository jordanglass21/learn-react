// my version

import { GalleryProps } from "@/types/gallery";

/**
 * Displays a scientist's profile with an image and details.
 * @param {object} props - The component props.
 * @param {object} props.scientist - The scientist's details.
 * @param {string} props.scientist.name - The name of the scientist.
 * @param {string} props.scientist.imageId - The image ID for the scientist's photo.
 * @param {string} props.scientist.profession - The scientist's profession.
 * @param {string} props.scientist.awards - The scientist's awards.
 * @param {string} props.scientist.discovery - The key discovery of the scientist.
 * @param {number} [props.size=100] - The image size in pixels (default is 100).
 * @returns {JSX.Element} A profile section with the scientist's information.
 */
function Scientist({scientist, size = 100}: GalleryProps) {
  return (
    <section className="profile">
        <h2>{scientist.name}</h2>
        <img
          className="avatar"
          src={'https://i.imgur.com/' + scientist.imageId + '.jpg'}
          alt={scientist.name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {scientist.profession}
          </li>
          <li>
            <b>Awards: 4 </b>
            {scientist.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {scientist.discovery}
          </li>
        </ul>
      </section>
  )
}

/**
 * Displays a gallery of notable scientists.
 * @returns {JSX.Element} A list of Scientist components.
 */
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Scientist
        scientist={{name: 'Maria Skłodowska-Curie', imageId: 'szV5sdGs', profession: 'physicist and chemist',
          awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)', discovery: 'polonium (element)'}}
        size={70} />
      <Scientist
        scientist={{name: 'Katsuko Saruhashi', imageId: 'YfeOqp2s', profession: 'geochemist',
          awards: '(Miyake Prize for geochemistry, Tanaka Prize)', discovery: 'a method for measuring carbon dioxide in seawater'}}
        size={70} />
    </div>
  );
}

// original version
/*
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/szV5sdGs.jpg'
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/YfeOqp2s.jpg'
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
*/
import Layout from 'components/Layout'
import { contact } from 'lib/constants';
import Page from 'components/layouts/Page';

export default function Contacto({ contact }) {

  return (
      <Page title="Contacto">
          <ul>
              <li><a href={`mailto:${ contact.email }`}>{ contact.email }</a></li>

              { contact.social.filter(item => ['instagram', 'youtube', 'pinterest'].includes(item.id)).map(item => (
                <li key={ item.id }><a href={ item.href } target='_blank' rel='noreferrer'>{ item.name }</a></li>
              )) }
          </ul>

        </Page>
  )
}


export async function getStaticProps(context) {

    return {
      props: { contact }, // will be passed to the page component as props
    }
  }

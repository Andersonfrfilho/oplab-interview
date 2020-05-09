import React, { useEffect } from 'react';

import axios from 'axios';
import {
  Container,
  Content,
  Background,
  AreaIcon,
  AreaIcons,
  AreaText,
  AreaFooter,
} from './styles';
import logoImg from '../../assets/logo.png';
import appleStoreImg from '../../assets/appstore.png';
import googlePlayImg from '../../assets/playstore.png';
import { useToast } from '../../hooks/toast';
import { bubbleSort, linkedList, gameOfStone } from '../../utils';

const Home: React.FC = () => {
  const { addToast } = useToast();
  useEffect(() => {
    addToast({
      type: 'success',
      title: 'Done!',
    });
  }, [addToast]);
  async function twitter(words: string): Promise<void> {
    try {
      const headers = {
        headers: {
          Authorization: `OAuth oauth_consumer_key="Zxq5GBj5hluWlhR1mrEpNjOPm", oauth_nonce="klECxwxOBhiG3ix9V8px2VQdhEx27tbY", oauth_signature="p%2F%2FVndNdKBO27eSYCG46J0Zer18%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1589055640", oauth_token="2766296104-drbC1tr30j2blWcL7UyccEgqUGzSEmvOkOwYZ2m", oauth_version="1.0"`,
        },
      };
      const response = await axios.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${words}&count=10`,
        {
          headers: {
            Authorization: ` OAuth oauth_consumer_key="Zxq5GBj5hluWlhR1mrEpNjOPm", oauth_nonce="klECxwxOBhiG3ix9V8px2VQdhEx27tbY", oauth_signature="p%2F%2FVndNdKBO27eSYCG46J0Zer18%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1589055640", oauth_token="2766296104-drbC1tr30j2blWcL7UyccEgqUGzSEmvOkOwYZ2m", oauth_version="1.0"`,
          },
        },
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  console.group('1.Implement bubble sort.');
  console.table(
    bubbleSort([
      12,
      345,
      4,
      546,
      122,
      84,
      98,
      64,
      9,
      1,
      3223,
      455,
      23,
      234,
      213,
    ]),
  );
  console.groupEnd();
  console.group('2.Implement a linked list.');
  linkedList();
  console.groupEnd();
  console.group('4.Game of Stone.');
  gameOfStone();
  console.groupEnd();
  console.group('5.Twitter question.');
  twitter('word');
  console.groupEnd();

  return (
    <Container>
      <Background />
      <Content>
        <AreaIcon>
          <img src={logoImg} alt="ARIA" />
        </AreaIcon>
        <AreaText>
          <h3>MENSSENGER FOR ANONYMOUS</h3>
          <h1>Send voice and text message anonymously</h1>
          <p>
            Aria is a messenger for people who prefer anonymity. Chat, call and
            hangout with friends anonymously. Aria is a tor for private
            conversations. None can catch thou.
          </p>
          <h2>DOWNLOAD ARIA FOR FREE ON</h2>
          <AreaIcons>
            <img src={appleStoreImg} alt="GoBarber" />
            <img src={googlePlayImg} alt="GoBarber" />
          </AreaIcons>
        </AreaText>
        <AreaFooter>
          <p>© Aria Messenger 2016</p>

          <div>
            <a href="#top">Facebook</a>
            <a href="#top">Twitter</a>
            <a href="#top">Instagram</a>
          </div>
        </AreaFooter>
      </Content>
    </Container>
  );
};
export default Home;

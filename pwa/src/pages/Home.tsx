import { h } from 'preact';
import { Text } from 'preact-i18n';
import { IfFeatureEnabled } from '@growthbook/growthbook-react';
import { SlButton } from '@shoelace-style/shoelace/dist/react';

function Home() {
  return (
    <div>
      <div>
        <Text id="title">Home</Text>
      </div>
      <IfFeatureEnabled feature="welcome-message">
        <p>Feature flagged paragraph</p>
      </IfFeatureEnabled>
      <SlButton>Shoelace Button</SlButton>
    </div>
  );
}

export default Home;

import { lazy, useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { getAssetPath } from "../../utils/paths";
import examConfig from "../../content/ExamConfig.json";

const Container = lazy(() => import("../../common/Container"));

const ExamContainer = styled.div`
  padding: 7rem 0 5rem;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
`;

const Logo = styled.img`
  max-width: 300px;
  height: auto;
  margin-bottom: 2rem;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 800px;
`;

const FormIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const FallbackMessage = styled.div`
  text-align: center;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 2rem;

  h3 {
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    margin-bottom: 2rem;
    color: #666;
  }
`;

const ExamPage = () => {
  const [iframeError, setIframeError] = useState(false);
  const { examId } = useParams<{ examId: string }>();
  
  const config = examConfig[examId as keyof typeof examConfig];
  
  if (!config) {
    return (
      <Container>
        <ExamContainer>
          <h1>Exam not found</h1>
        </ExamContainer>
      </Container>
    )
  }

  return (
    <Container>
      <ExamContainer>
        <Logo 
          src={getAssetPath(config.logo)} 
          alt={config.alt}
        />
        {!iframeError ? (
          <FormContainer>
            <FormIframe
              src={config.formUrl}
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              onError={() => setIframeError(true)}
            >
              Loading…
            </FormIframe>
          </FormContainer>
        ) : (
          <FallbackMessage>
            <h3>Unable to load the form</h3>
            <p>Please click the button below to open the form in a new tab</p>
            <Button 
              type="primary" 
              href={config.formUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Form
            </Button>
          </FallbackMessage>
        )}
      </ExamContainer>
    </Container>
  );
};

export default ExamPage;
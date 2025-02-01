import styled from 'styled-components';


export const SpinnerWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .spinner-container {
    position: relative;
    width: 100px;  /* Adjust size */
    height: 100px;
  }

  .spinner {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('/images/misc/spinner.png');
    background-size: contain;
    background-repeat: no-repeat;
    animation: spin 1s linear infinite;
    transform-origin: center;
  }

  .picture {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

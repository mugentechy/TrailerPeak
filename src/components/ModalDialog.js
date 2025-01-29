import React, { useState, useEffect, useCallback } from 'react';
import axios from '../utils/axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';
import '../assets/row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

const CustomDialog = styled(Dialog)`
  & .MuiPaper-root {
    background-color: #141414;
    border-radius: 8px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    margin: 0;
    padding: 24px;
    max-height: 90vh;
  }
`;

const CustomDialogTitle = styled(DialogTitle)`
  && {
    font-size: 24px;
    color: white;
  }
`;

const CustomDialogContent = styled(DialogContent)`
  && {
    background-color: #141414;
    color: white;
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    padding: 0;
  }
`;

const CustomDialogContentText = styled(DialogContentText)`
  && {
    margin: 0;
    padding-left: 16px;
  }
`;

const CustomDialogActions = styled(DialogActions)`
  && {
    background-color: #141414;
  }
`;

const CustomButton = styled(Button)`
  && {
    color: white;
    font-size: 16px;
  }
`;

const CustomWatchTrailerButton = styled(Button)`
  && {
    color: white;
    font-size: 16px;
    background-color: #e50914;
    border-radius: 4px;
  }
`;

const CustomImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ModalDialog = ({ open, handleClose, view, crew, type }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <CustomDialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby='responsive-dialog-title'
    >
      <CustomDialogTitle id='responsive-dialog-title'>
        {view?.name || view?.title}
      </CustomDialogTitle>
      <CustomDialogContent>
        <CustomImg src={`${base_url}${view?.poster_path}`} alt={view?.name || view?.title} />
        <CustomDialogContentText>
          {view?.overview && (
            <p style={{ fontSize: '16px' }}>
              <strong>Overview:</strong> {view.overview}
            </p>
          )}
          {view?.air_date && (
            <p style={{ fontSize: '16px' }}>
              <strong>Air Date:</strong> {view.air_date}
            </p>
          )}
          {view?.vote_average && (
            <p style={{ fontSize: '16px' }}>
              <strong>Vote Average:</strong> {view.vote_average}
            </p>
          )}
          {view?.runtime && (
            <p style={{ fontSize: '16px' }}>
              <strong>Duration:</strong> {view.runtime} mins
            </p>
          )}
          <p style={{ fontSize: '16px' }}>
            <strong>Cast</strong>
          </p>
          {crew.map((member) => (
            <span key={member.id} className="sect">{member.name}</span>
          ))}
        </CustomDialogContentText>
      </CustomDialogContent>
      <CustomDialogActions>
        <CustomButton autoFocus onClick={handleClose}>
          Close
        </CustomButton>
        <a
          href={`/movie/${view?.id}/${type || " "}/${view?.name || view?.title}`}
          rel='noopener noreferrer'
        >
          <CustomWatchTrailerButton autoFocus onClick={handleClose}>
            Watch Trailer
          </CustomWatchTrailerButton>
        </a>
      </CustomDialogActions>
    </CustomDialog>
  );
};

export default ModalDialog;

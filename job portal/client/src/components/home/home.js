import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import {Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';

import Posts from "../posts/posts";
import Paginate from '../pagination';
import Form from "../form/form";
import useStyles from "./styles";
import { getPostsBySearch} from '../../actions/posts';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Home =()=>{
    const query = useQuery();
    const classes =useStyles();
    const page = query.get('page') || 1;

    const [currentId, setCurrentId]= useState(0); 
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');
    // const [search1, setSearch1] = useState('');
    // const [search2, setSearch2] = useState('');
    const navigate = useNavigate();
    // useEffect(()=>{
    //     dispatch(getposts());
    // },[currentId,dispatch])
    

   const searchPost =()=>{
        if(search.trim()){
            dispatch(getPostsBySearch({search}));
            navigate(`/posts/search?searchQuery=${search || 'none'}`);
        }else{
            navigate('/');
        }
    };

    const handleKeyPress =(e)=>{
        if(e.keyCode === 13){
            searchPost();
        }
    };

    return(
        <Grow in>
              <Container className={classes.root}  maxWidth='xl'>
                  <Grid container  justifyContent='space-between' alignItems='stretch' spacing={3} className={classes.gridContainer}>
                        <Grid item xs={12} sm={6} md={9}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <AppBar className={classes.appBarSearch} position="static" color='inherit'>
                            <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Company Name" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
                            {/* <TextField onKeyDown={handleKeyPress} name="search1" variant="outlined" label="Profile" fullWidth value={search1} onChange={(e) => setSearch1(e.target.value)} /> */}
                            {/* <TextField onKeyDown={handleKeyPress} name="search2" variant="outlined" label="Location" fullWidth value={search2} onChange={(e) => setSearch2(e.target.value)} /> */}
                                    <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">
                                        Search
                                    </Button>
                            </AppBar>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            <Paper className={classes.pagination} elevation={6}>
                                <Paginate page={page} />
                            </Paper>
                        
                        </Grid>
                  </Grid>
              </Container>
          </Grow>
    );
};

export default Home;
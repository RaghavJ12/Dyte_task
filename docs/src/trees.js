import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import { TreeView } from '@material-ui/lab';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "./index.css";

const useStyles = makeStyles(({
	root: {
        height: 240,
		flexGrow: 1,
		paddingTop: 15,
	},
}));

export default function Trees() {
	const theme = useTheme();
	const classes = useStyles(theme);
    
    // const [fn, setfn] = useState("index.html");

    // function name(n){
    //     setfn(n);
    // }
	return (
		<div className={classes.root}>

                {/* <FileName name={fn} /> */}
				<List class='tree'>
					<div>

						<TreeView class="px-3"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}>
							<TreeItem nodeId="1" label={
								<ListItem button component="a">
									<ListItemText primary="Files" />
								</ListItem>}>
								<TreeItem nodeId="1a" label={
									<ListItem button component="a" href="#">
										<ListItemText primary="index.html" />
									</ListItem>}>
								</TreeItem>
								<TreeItem nodeId="1b" label={
									<ListItem button component="a" href="#">
										<ListItemText primary="index.js" />
									</ListItem>}>
								</TreeItem>
                                <TreeItem nodeId="1c" label={
									<ListItem button component="a" href="#">
										<ListItemText primary="index.css" />
									</ListItem>}>
								</TreeItem>
							</TreeItem> 
						</TreeView>
					</div>
				</List>

		</div>
	);
}

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text,
} from '@storybook/addon-knobs';
import DataGrid from '.';
import Box from '../box';
import { StoryWrapper } from '../wrappers';
import Info from './info.md';
import Text from '../text';

const DATA = [{
  email: '4@domain.com',
  name: 'A',
  link: 'http://a.com',
  rowId: 1,
}, {
  email: '3@domain.com',
  name: 'B',
  link: 'http://b.com',
  rowId: 2,
}, {
  email: '2@domain.com',
  name: 'C',
  link: 'http://c.com',
  rowId: 3,
}, {
  email: '1@domain.com',
  name: 'D',
  link: 'http://d.com',
  rowId: 4,
}];

const COLUMNS = [{
  name: 'Name',
  key: 'name',
  sortable: true,
  editable: true,
}, {
  name: 'Email',
  key: 'email',
  sortable: true,
  editable: true,
}, {
  name: 'Link',
  key: 'link',
  editable: true,
}];

const GridHandler = () => {
  const [list, setList] = useState(DATA);
  const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    // update based on invite list
    const updatedList = [...list];

    for (let row = fromRow; row <= toRow; row++) {
      // get rowId from row at "display list"
      const { rowId } = list[row];

      // update using rowId
      const index = updatedList.findIndex(row => row.rowId === rowId);
      updatedList[index] = { ...list[index], ...updated };
    }
    setList(updatedList);
  };

  return (
    <DataGrid
      columns={COLUMNS}
      data={list}
      enableCellSelect
      rowGetter={row => list[row]}
      onGridRowsUpdated={onGridRowsUpdated}
    />
  );
};


storiesOf('Base', module)
  .addDecorator(withKnobs)
  .add('DataGrid', () => (
    <StoryWrapper p={15}>
      <Box p={15}>
        <Box>
          <Text title size="large">DataGrid</Text>
          <Box horizontal space={60}>
            <GridHandler />
          </Box>
        </Box>
      </Box>
    </StoryWrapper>
  ),
  {
    notes: {
      markdown: Info,
    },
  });

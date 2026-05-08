import { Table } from '@heroui/react';
import React from 'react';

const TableTAsk = () => {
    return (
        <div>
             <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            
            <Table.Row>
              <Table.Cell>Kate Moore</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>kate@acme.com</Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
        </div>
    );
};

export default TableTAsk;
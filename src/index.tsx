import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {  //tabelas para o panco
    transaction: Model,  
  },

  //para ter um pronto
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Titulo locao',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-18')
        },
        {
          id: 2,
          title: 'Titulo reduz',
          type: 'withdraw',
          category: 'Casa',
          amount: 1000,
          createdAt: new Date('2021-02-28')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

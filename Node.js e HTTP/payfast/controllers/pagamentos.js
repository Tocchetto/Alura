
module.exports = function(app){
    
    app.get('/pagamentos', function(req, res){
        console.log('recebida requisição de teste!');
        res.send('OK. ');
    });

    app.post('/pagamentos/pagamento', function(req, res){
        var pagamento = req.body;
        console.log('Processando requisição de pagamento');
        pagamento.status = 'CRIADO';
        pagamento.data = new Date;

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.PagamentoDao(connection);
        console.log('a');
        pagamentoDao.salva(pagamento, function(erro, resultado){
            console.log('Pagamento criado');
            res.json(pagamento);
        });
    });

}
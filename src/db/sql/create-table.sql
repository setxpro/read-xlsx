CREATE TABLE `loja_message` (
    `lojaId` UNIQ AUTO_INCREMENT NOT NULL ,
    `NumCelular` VARCHAR(20)  NOT NULL ,
    `ddd` VARCHAR(5)  NOT NULL ,
    `uf` VARCHAR(5)  NOT NULL ,
    `LojaRemetente` VARCHAR(20)  NOT NULL ,
    `ClienteDestinatario` VARCHAR(20)  NOT NULL ,
    `loja` VARCHAR(5)  NOT NULL ,
    `lojaLocal` VARCHAR(15)  NOT NULL ,
    `razaoSocial` VARCHAR(20)  NOT NULL ,
    `nomeCliente` VARCHAR(30)  NOT NULL ,
    `CpfCliente` VARCHAR(11)  NOT NULL ,
    `mensagemClient` VARCHAR(200)  NOT NULL ,
    `clienteData` VARCHAR(15)  NOT NULL ,
    `clienteHoras` VARCHAR(8)  NOT NULL ,
    PRIMARY KEY (
        `lojaId`
    )
);

CREATE TABLE `cliente_message` (
    `clienteId` UNIQ AUTO_INCREMENT NOT NULL ,
    `NumCelular` VARCHAR(20)  NOT NULL ,
    `ddd` VARCHAR(5)  NOT NULL ,
    `uf` VARCHAR(5)  NOT NULL ,
    `clienteRemetente` VARCHAR(20)  NOT NULL ,
    `LojaDestinatario` VARCHAR(20)  NOT NULL ,
    `nomeCliente` VARCHAR(30)  NOT NULL ,
    `CpfCliente` VARCHAR(11)  NOT NULL ,
    `mensagemLoja` VARCHAR(200)  NOT NULL ,
    `lojaData` VARCHAR(15)  NOT NULL ,
    `lojaHoras` VARCHAR(8)  NOT NULL ,
    PRIMARY KEY (
        `clienteId`
    )
);

CREATE TABLE `lojas` (
    `lojasId` INT AUTO_INCREMENT NOT NULL ,
    `uf` VARCHAR(2)  NOT NULL ,
    `local` VARCHAR(30)  NOT NULL ,
    `loja` VARCHAR(3)  NOT NULL ,
    `iccid` VARCHAR(23)  NOT NULL ,
    `numeroTelefone` VARCHAR(13)  NOT NULL ,
    `numeroCotacao` VARCHAR(10)  NOT NULL ,
    `danfe` VARCHAR(10)  NOT NULL ,
    `razaoSocial` VARCHAR(30)  NOT NULL ,
    `razaoSocialContrato` VARCHAR()  NOT NULL ,
    `cnpjContrato` VARCHAR(18)  NOT NULL ,
    `razaoSocialLoja` VARCHAR(30)  NOT NULL ,
    `cnpjLoja` VARCHAR(18)  NOT NULL ,
    `CpfCliente` VARCHAR(11)  NOT NULL ,
    PRIMARY KEY (
        `lojasId`
    )
);

ALTER TABLE `loja_message` ADD CONSTRAINT `fk_loja_message_CpfCliente` FOREIGN KEY(`CpfCliente`)
REFERENCES `lojas` (`CpfCliente`);

ALTER TABLE `cliente_message` ADD CONSTRAINT `fk_cliente_message_CpfCliente` FOREIGN KEY(`CpfCliente`)
REFERENCES `lojas` (`CpfCliente`);

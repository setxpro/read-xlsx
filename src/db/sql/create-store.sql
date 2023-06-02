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
    `razaoSocialContrato` VARCHAR(30)  NOT NULL ,
    `cnpjContrato` VARCHAR(18)  NOT NULL ,
    `razaoSocialLoja` VARCHAR(30)  NOT NULL ,
    `cnpjLoja` VARCHAR(18)  NOT NULL ,
    `CpfCliente` VARCHAR(11)  NOT NULL ,
    PRIMARY KEY (
        `lojasId`
    )
);
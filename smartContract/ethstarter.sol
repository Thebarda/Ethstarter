pragma solidity ^0.4.16;
contract Ethstarter {
    //Stucture d'un contributeur
    struct Contributor{
        address addrContributor;
        uint amountGiven; //en Wei ( 1 ether = 1e18 wei)
    }
    //Structure d'une campagne de financement
    struct Crowfunding{
        address addrContractor;
        uint goal; //en Ether ( 1 ether = 1e18 wei)
        uint maxGoal; //en Ether ( 1 ether = 1e18 wei)
        uint amount; //en Wei ( 1 ether = 1e18 wei)
        uint nbContributors;
        bool estEnCours;
        mapping(uint => Contributor) contributors;
    }
    //Instances du contract
     mapping(uint => Crowfunding) public crowfundings;
     uint public nbCrowfundings;

    //Ajout d'une campagne de financement
     function addCrowfunding(uint _id, address _addrContractor, uint _goal, uint _maxGoal) public{
        nbCrowfundings++;
        crowfundings[_id] = Crowfunding(_addrContractor, _goal, _maxGoal, 0, 0, true);
        crowfundings[_id].amount=0;
    }

    //Ajout d'un contributeur à une campagne
    function addContributor(uint _idCrowfundig) public payable{
        Crowfunding storage c = crowfundings[_idCrowfundig];
        if(c.estEnCours){
            c.contributors[c.nbContributors++] = Contributor(msg.sender, msg.value);
            c.amount += msg.value;
        }
    }

    //Cas où la campagne échoue, cette fonction envoie les ethers récoltés aux contributeurs.
    function sendToContributors(uint _id) public{
        Crowfunding storage c = crowfundings[_id];
        for(uint i=0;i<c.nbContributors;i++){
            Contributor storage contributor = c.contributors[i];
            contributor.addrContributor.transfer(contributor.amountGiven);
            c.amount -= contributor.amountGiven;
        }
    }

    //Cas où la compagne réussie, cette fonction avoie les ethers récoltés à l'entrepreneur.
    function sendToContractor(uint _id) public{
        Crowfunding storage c = crowfundings[_id];
        uint amountToContractor = c.amount - 40000000000000000;
        c.addrContractor.transfer(amountToContractor);
        msg.sender.transfer(40000000000000000);
        c.amount = 0;
    }

    //Change le estEnCours d'une campagne.
    function setEstEnCours(uint _id, bool _estEnCours) public{
        Crowfunding storage c = crowfundings[_id];
        c.estEnCours = _estEnCours;
    }

    function removeContribution(uint _idCampagne, address _addrContributor) public{
        Crowfunding storage c = crowfundings[_idCampagne];
        for(uint i=0;i<c.nbContributors;i++){
            Contributor storage contributor = c.contributors[i];
            if(contributor.addrContributor == _addrContributor){
                contributor.addrContributor.transfer(contributor.amountGiven);
                c.amount = contributor.amountGiven;
                c.nbContributors--;
            }
        }
    }
}

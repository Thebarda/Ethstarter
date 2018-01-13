pragma solidity ^0.4.16;
contract Ethstarter {
    struct Contributor{
        address addrContributor;
        uint amountGiven;
    }

    struct Crowfunding{
        address addrContractor;
        uint goal;
        uint maxGoal;
        uint amount;
        uint nbContributors;
        bool estEnCours;
        mapping(uint => Contributor) contributors;
    }
     mapping(uint => Crowfunding) public crowfundings;
     uint public nbCrowfundings;
     //receiver.transfer(10);

     function addCrowfunding(uint _id, address _addrContractor, uint _goal, uint _maxGoal) public{
        nbCrowfundings++;
        crowfundings[_id] = Crowfunding(_addrContractor, _goal, _maxGoal, 0, 0, true);
        crowfundings[_id].amount=0;
    }

    function addContributor(uint _idCrowfundig) public payable{
        Crowfunding storage c = crowfundings[_idCrowfundig];
        if(c.estEnCours){
            c.contributors[c.nbContributors++] = Contributor(msg.sender, msg.value);
            c.amount += msg.value;
        }
    }

    function sendToContributors(uint _id) public{
        Crowfunding storage c = crowfundings[_id];
        for(uint i=0;i<c.nbContributors;i++){
            Contributor storage contributor = c.contributors[i];
            contributor.addrContributor.transfer(contributor.amountGiven);
            c.amount -= contributor.amountGiven;
        }
    }

    function sendToContractor(uint _id) public{
        Crowfunding storage c = crowfundings[_id];
        c.addrContractor.transfer(c.amount);
        c.amount = 0;
    }

    function setEstEnCours(uint _id, bool _estEnCours) public{
        Crowfunding storage c = crowfundings[_id];
        c.estEnCours = _estEnCours;
    }
}
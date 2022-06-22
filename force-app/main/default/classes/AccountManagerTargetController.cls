public with sharing class AccountManagerTargetController {
     
    @AuraEnabled(cacheable=true)
    public static List<AcctMgrTarget> getAccountManagerTargetList(){
        return [SELECT Id, Name, TargetCurrencyValue, TargetValue, StartDate, EndDate FROM AcctMgrTarget];
    }
}

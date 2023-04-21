import { navigateTo } from "../support/page_objects/navigationPage";
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage";
import { onDatePickerPage } from "../support/page_objects/datepickerPage";
import { onSmartTablePage } from "../support/page_objects/smartTablePage";

describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage();
    })

    it('verify navigation across the pages', () => {
        navigateTo.formLayoutsPage();
        navigateTo.datepickerPage();
        navigateTo.smartTablePage();
        navigateTo.tooltipPage();
        navigateTo.toasterPage();
    })

    it.only('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage();
        onFormLayoutsPage.submitInLineFormWithNameAndEmail('Thor', 'test@example.com');
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@example.com', 'password');
        navigateTo.datepickerPage();
        onDatePickerPage.selectCommonDatepickerFromToday(1);
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14);
        navigateTo.smartTablePage();
        onSmartTablePage.addNewRecordWithFirstAndLastName('Luke', 'Skywalker');
        onSmartTablePage.updateAgeByFirstName('Luke', '25');
        onSmartTablePage.deleteRowByIndex(1);
    })


})

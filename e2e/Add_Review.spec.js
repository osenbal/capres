/* eslint-disable no-undef */
Feature('Add Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing list restaurant', ({ I }) => {
  I.seeElement('.restaurant__item-header-poster');
});

Scenario('Add Review', ({ I }) => {
  I.seeElement('.restaurant__item-header a');

  I.seeElement('.restaurant__item-header a');
  I.click('.restaurant__item-header a');

  I.seeElement('#formAddReview');
  I.seeElement('.input-nama');
  I.fillField('name', 'test');
  I.fillField('review', 'fffffffffffff');
  I.seeElement('.btn__add-review');
  I.click('.btn__add-review');
});

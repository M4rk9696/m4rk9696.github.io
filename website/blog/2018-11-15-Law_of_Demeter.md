---
title: Design Guideline Series 1
author: Nimalan aka Mark
authorURL: https://github.com/M4rk9696
---

### Design Guideline 1 - Law of Demeter

<!-- truncate -->

#### What is the Law of Demeter?
- Each unit should have only limited knowledge about other units: only units "closely" related to the current unit.
- Each unit should only talk to its friends; don't talk to strangers.
- Only talk to your immediate friend

In simple terms
> LoD tells us that it is a bad idea for single functions to know the entire navigation structure of the system.

``` java
class A {

  public void method1(O obj) {
    // Class A has unnecessary access to objects X, Y, Z
    // Don't talk to strangers.
    obj.getX()
          .getY()
            .getZ()
              .doSomething();
  }

  public void method2(O obj) {
    // Have maybe a utility method which does this
    obj.doSomething();
  }

}
```

#### Why use the Law of Demeter?
- Increases maintainable and adaptable

#### Why will the code become a problem?

Currently Class A **directly** depends on Class O.

After a few months the code might become something like this.

```java
class A {

  public void method1(O obj) {
    X = obj.getX();

    X.doSomethingElse();

    X.getY()
      .getZ()
      .doSomething();
  }

}
```

Now Class A is **directly** depends on both Class O and Class X. Let's say owner of Class O want to deprecate the use of Class X as he is moving to a new model.

He will not be able to as he needs to deal with the dependency in Class A.

This also affects the testability of Class A.

#### Text Book Use Case

```java
  class User {
    // Law of Demeter Violation
    Account account;
    double getDiscountedPrice(String discountCode) {
      Coupon coupon = Coupon.create(discountCode);
      return coupon.discount(account.getPlan().getPrice());
    }
  }

  class Account {
    Plan plan;
  }
```

```java
  class User {
    Account account;
    double getDiscountedPrice(String discountCode) {
      return account.discountPlanPrice(discountCode);
    }
  }

  class Account {
    Plan plan;
    double discountPrice(String discountCode) {
      Coupon coupon = Coupon.create(discountCode);
      return coupon.discount(plan.getPrice());
    }
  }
```


#### References

- https://hackernoon.com/object-oriented-tricks-2-law-of-demeter-4ecc9becad85
- https://pmd.github.io/pmd-6.0.1/pmd_rules_java_design.html#lawofdemeter

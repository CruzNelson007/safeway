import React from "react";
import { Button, CardImg } from "reactstrap";
import ReferralForm from "../forms/ReferralForm";

function Referrals() {
  return (
    <section className="bg-light py-5" id="services">
      <div className="container my-5">
        <h1>Services</h1>
        <p className="py-3">
          Our facility is designed to be a homelike environment where families
          and individuals can spend quality time. Conveniently located on the
          bus line, with easy access to major highways, we strive to make things
          easy for families to spend time together. We offer flexible hours for
          working parents, sliding scale fee schedule, and transportation for
          children and youth. We have rigorous screening and sanitation
          procedures in place to insure everyone’s health and safety.
        </p>
        <hr />
        {/* PARENTING */}
        <div className="row align-items-center" id="parenting">
          <div className="col-md-4 my-5">
            <span>
              <CardImg src="/mother_baby.svg" />
            </span>
          </div>
          <div className="col-md-8">
            <h4>Parenting</h4>
            <p className="py-3">
              Safeway Family Services offers an individualized program for
              parents who have successfully completed a structured parenting
              curriculum, but continue to struggle with applying the skills they
              have learned. Services are offered in our homelike setting,
              working with the child and parent together. Parents are observed
              interacting with their child and provided with feedback regarding
              their interactions. Parents are offered the opportunity to role
              play and discuss challenges, brainstorm ideas, and observe staff
              modeling skills. Input from DCF workers and evaluations is used to
              focus on each parent’s specific challenges.
            </p>
            <ReferralForm />
          </div>
        </div>
        {/* LIFE SKILLS */}
        <div className="row align-items-center" id="lifeSkills">
          <div className="col-md-8 order-2 order-md-1 order-lg-1 order-xl-1">
            <h4>Life Skills</h4>
            <p className="py-3">
              Safeway Family Services offers assessment and instruction in
              Community Based Life Skills. Designed for adolescents in foster
              care or congregate settings, this service assesses a youth’s
              ability to function independently, and provides hands on skill
              training. Experiential and repetitive activities insure mastery of
              the skills. Services may be offered individually, or in small
              groups. Participants prepare in our facility, then practice skills
              in the community.
            </p>
            <ReferralForm />
          </div>
          <div className="col-md-4 my-5 order-1 order-md-2 order-lg-2 order-xl-2">
            <span>
              <CardImg src="/exam.svg" />
            </span>
          </div>
        </div>
        {/* MENTORING */}
        <div className="row align-items-center" id="mentoring">
          <div className="col-md-4 my-5">
            <span>
              <CardImg src="/friends_running.svg" />
            </span>
          </div>
          <div className="col-md-8">
            <h4>Mentoring</h4>
            <p className="py-3">
              Safeway Family Services offers individualized services to meet the
              unique needs of youth struggling with emotional, social and
              behavioral challenges. Through individual support, academic
              enrichment, recreation, and small group activities youth are
              supported and encouraged to reach their fullest potential. This
              service is typically provided in the community, encouraging youth
              to interact with others. Input from DCF workers,
              parents/guardians, school staff and others is used to develop a
              comprehensive treatment plan to document progress.
            </p>
            <ReferralForm />
          </div>
        </div>
        {/* SUPERVISED VISITS */}
        <div className="row align-items-center" id="supervisedVisits">
          <div className="col-md-8 order-2 order-md-1 order-lg-1 order-xl-1">
            <h4>Supervised Visits</h4>
            <p className="py-3">
              Safeway Family Services facilitates visits between significant
              adults and children in the care of others. This includes children
              in foster care, congregate care, guardianship through probate
              court, custody agreements, or other arrangements. Services can
              occur in our secure, homelike facility, in the community or other
              locations. Staff are available to provide transportation for the
              child, insure the safety of the child, and monitor interactions
              between the child and visitor. Staff will closely monitor
              conversations to insure there is positive communication and
              interactions between the child and visitor.
            </p>
            <ReferralForm />
          </div>
          <div className="col-md-4 my-5 order-1 order-md-2 order-lg-2 order-xl-2">
            <span>
              <CardImg src="/father_son.svg" />
            </span>
          </div>
        </div>
        {/* HOME & COMPANION */}
        <div className="row align-items-center" id="homeSupport">
          <div className="col-md-4 my-5">
            <span>
              <CardImg src="/helping_disabled.svg" />
            </span>
          </div>
          <div className="col-md-8">
            <h4>Home &amp; Companion</h4>
            <p className="py-3">
              Safeway Family Services staff will provide in home and community
              based support services to individuals with developmental
              disabilities. Our staff will work to develop meaningful
              relationships with individuals and families to provide quality
              experiences and activities for identified individuals. In person
              and virtual activities offer recreational, vocational and social
              skill development through individual and small group activities as
              appropriate. Family members, guardians, and case managers
              contribute to the development of the activity plan to insure the
              individual has a meaningful experience.
            </p>
            <ReferralForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Referrals;

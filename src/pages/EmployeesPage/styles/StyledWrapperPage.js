import styled from 'styled-components/macro';

export const StyledWrapperPage = styled.article`
    display: grid;
    margin-bottom: 0.5rem;
    grid-template-columns: 3fr minmax(50px, 1.1fr);
    grid-template-rows: auto;
    gap: 0 1rem;
    grid-template-areas:
        "employeesTitle birthdaysTitle"
        "employeesList birthdaysList";
`;
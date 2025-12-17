test("endpoint http://localhost:3000/api/v1/home should return 200", async () => {
    const res = await fetch("http://localhost:3000/api/v1/home");
    expect(res.status).toBe(200);

    const resBody = await res.json();

    const res_jan2025 = resBody.jan_2025;

    expect(Array.isArray(res_jan2025)).toBe(true);
    expect(res_jan2025.length).toBeGreaterThan(0);
});
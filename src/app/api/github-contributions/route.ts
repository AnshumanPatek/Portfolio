import { NextResponse } from "next/server";

const USERNAME = "AnshumanPatek";
const UPSTREAM = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;

const COLS = 53;
const ROWS = 7;
const CELL_COUNT = COLS * ROWS;

type UpstreamContribution = { date: string; count: number; level: number };

export async function GET() {
  try {
    const res = await fetch(UPSTREAM, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Upstream request failed" },
        { status: 502 },
      );
    }

    const data = (await res.json()) as {
      total?: { lastYear?: number };
      contributions: UpstreamContribution[];
    };

    const contributions = data.contributions ?? [];
    const total = data.total?.lastYear ?? 0;

    const levels = contributions.map((c) =>
      Math.min(Math.max(c.level, 0), 4),
    );

    let seq = levels;
    if (seq.length > CELL_COUNT) {
      seq = seq.slice(-CELL_COUNT);
    } else if (seq.length < CELL_COUNT) {
      seq = [...Array(CELL_COUNT - seq.length).fill(0), ...seq];
    }

    const cells: number[] = new Array(CELL_COUNT).fill(0);
    for (let k = 0; k < CELL_COUNT; k++) {
      const week = Math.floor(k / ROWS);
      const day = k % ROWS;
      const idx = day * COLS + week;
      cells[idx] = seq[k] ?? 0;
    }

    return NextResponse.json({ total, cells, username: USERNAME });
  } catch {
    return NextResponse.json(
      { error: "Failed to load contributions" },
      { status: 500 },
    );
  }
}
